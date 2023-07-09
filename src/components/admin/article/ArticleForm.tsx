"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import TextContentForm from "./TextContentForm";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setArticleDetails } from "@/globalRedux/admin/features/articlesSlice";
import { setMiscDetails } from "@/globalRedux/admin/features/miscSlice";
import { ArticleType, FileType } from "../../../types";
import { uploadImage } from '@/lib/utils';

import styles from "@/components/admin/article/ArticleForm.module.css";
import uploadIcon from "@/assets/upload.svg";
import { RootState } from "@/globalRedux/admin/store";

interface ArticleFormProps {
  mode: string;
  article?: string;
}

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
];
const validFileType = (file: File) => {
  return fileTypes.includes(file.type);
};
const returnFileSize = (number: number) => {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
};

const ArticleForm: FC<ArticleFormProps> = (props) => {
  const dispatch = useDispatch();

  const enBannerRef = useRef<HTMLInputElement>(null);
  const enThumbnailRef = useRef<HTMLInputElement>(null);

  let articleObj: {
    enContent: string;
  } = JSON.parse(props.article || "{}");

  //console.log('enContentState', JSON.stringify(enContentState))
  const emptyEnContent = convertToRaw(
    EditorState.createEmpty().getCurrentContent()
  );

  useEffect(() => {
    if (props.mode === "edit" && !!props.article) {
      articleObj = JSON.parse(props.article)
      //console.log(articleObj)
      dispatch(
        setArticleDetails({
          ...JSON.parse(props.article || "{}"),
          enContentState: articleObj.enContent
            ? JSON.parse(articleObj.enContent)
            : convertToRaw(EditorState.createEmpty().getCurrentContent()),
        })
      );
    } else if (props.mode === "create") {
      dispatch(
        setArticleDetails({
          _id: "",
          createdBy: "",
          createdAt: null,
          isPublished: false,
          enTitle: "",
          enSlug: "",
          enMetaDesc: "",
          enContent: JSON.stringify(emptyEnContent),
          enContentState: emptyEnContent,
          thumbnailUrl: "",
          bannerUrl: "",
        })
      );
    }
  }, [props.mode]);

  const {
    _id,
    __v,
    createdBy,
    createdAt,
    isPublished,
    enTitle,
    enSlug,
    enMetaDesc,
    enContentState,
    thumbnailUrl,
    bannerUrl,
  } = useSelector((state: RootState) => state.articleDetail);

  const saveAndPreview = async () => {
    const newData = {
      _id,
      __v,
      createdBy,
      createdAt,
      isPublished,
      enTitle,
      enSlug,
      enMetaDesc,
      enContent: enContentState,
      thumbnailUrl,
      bannerUrl,
    };
    //console.log(newData)
    const action = props.mode === "edit" ? "edit" : "create";
    //const method = props.mode === "edit" ? "PUT" : "POST";

    const res = await axios.post(
      `/api/admin/article/${action}`,
      {
        ...newData,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    //console.log(res);
    if (res.status === 201 && res.data.success === true) {
      const id = res.data.article._id
      dispatch(
        setArticleDetails({
          _id: id
        })
      )
      const previewUrl = `/admin/preview/${enSlug}/${id}`;
      window.open(previewUrl, "_blank");
    }
  };
  
  const bannerChangeHandler = async () => {
    const curFiles = (enBannerRef.current && enBannerRef.current.files) || [];
    if (curFiles.length <= 0) return;

    const bannerUrl = await uploadImage(curFiles[0]);
    dispatch(
      setArticleDetails({
        bannerUrl,
      })
    );
  };
  const thumbnailChangeHandler = async (event: React.ChangeEvent) => {
    const curFiles =
      (enThumbnailRef.current && enThumbnailRef.current.files) || [];

    if (curFiles.length <= 0) return;

    const thumbnailUrl = await uploadImage(curFiles[0]);
    dispatch(
      setArticleDetails({
        thumbnailUrl
      })
    );

    //enThumbnailRef.current && enThumbnailRef.current.value = null;
  };

  const isValidContent = () => {
    if (
      enTitle &&
      EditorState.createWithContent(convertFromRaw(enContentState))
        .getCurrentContent()
        .hasText() &&
      thumbnailUrl &&
      bannerUrl
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onEngPreviewClick = () => {
    if (isValidContent()) {
      dispatch(setMiscDetails({ showEnErr: false }));
      saveAndPreview();
    } else {
      // show error -> pass error prop
      dispatch(setMiscDetails({ showEnErr: true }));
    }
  };

  return (
    <section className="w-5/6 mx-auto">
      <div className="grid gap-4 grid-cols-12 py-5">
        <div className="col-span-3">
          <p className="text-gray-800 text-lg font-bold py-4">
            <Link
              href="/admin/dashboard"
              className={`${styles.navmenu} px-3 py-2 uppercase cursor-pointer`}
            >
              {"< "} BACK
            </Link>
          </p>
        </div>
        <div className="navmenu text-center col-span-6">
          <p className="text-gray-800 text-lg font-bold py-4">
            <span className={`${styles.navmenu} px-5 py-2 uppercase `}>
              {props.mode === "edit" ? "Edit Article" : "New Article"}
            </span>
          </p>
        </div>
        <div className="col-span-3 text-right"></div>
      </div>
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-3"></div>
        <div className="title text-center col-span-6"></div>
        <div className="col-span-3 text-right"></div>
      </div>

      {/* form */}
      <form>
        <div className="grid gap-3 grid-cols-12">
          <input type="hidden" id="_id" />
          <div className="col-span-12 sm:col-span-12 md:col-span-2">
            <label htmlFor="enThumbNailImg">
              Thumbnail <span className={styles["mandatory"]}>*</span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
            <label
              htmlFor="enThumbNailImg"
              className=" w-fit px-4 py-3 border rounded border-solid bg-white"
            >
              <Image src={uploadIcon} alt="" className="mr-2 inline-block" />
              Upload image
            </label>
            <input
              ref={enThumbnailRef}
              id="enThumbNailImg"
              name="enThumbNailImg"
              type="file"
              placeholder="Slug"
              className="w-full h-10 px-3 py-1 rounded hidden"
              onChange={thumbnailChangeHandler}
            />
            <img
              src={thumbnailUrl}
              className="w-[70px] inline-block relative top-[-50%] float-right"
            />
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-2">
            <label htmlFor="enBannerImage">
              Banner <span className={styles["mandatory"]}>*</span>
            </label>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-10 ">
            <label
              htmlFor="enBannerImage"
              className="flex w-fit px-4 py-3 border rounded border-solid bg-white inline-block"
            >
              <Image src={uploadIcon} alt="" className="mr-2 inline-block" />
              Upload image
            </label>
            <input
              ref={enBannerRef}
              id="enBannerImage"
              name="enBannerImage"
              type="file"
              placeholder="Slug"
              className="w-full h-10 px-3 py-1 rounded hidden"
              onChange={bannerChangeHandler}
            />
            <img
              src={bannerUrl}
              className="w-[70px] inline-block relative top-[-50%] float-right"
            />
          </div>

          <div className="col-span-12">
            <hr className={styles["divider"]} />
          </div>
        </div>

        <TextContentForm onEngPreviewClick={onEngPreviewClick} />
      </form>
    </section>
  );
};

export default ArticleForm;
