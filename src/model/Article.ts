import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
    enTitle: String,
    enSlug: String,
    enMetaDesc: String,
    enContent: String,
    createdBy: String,
    createdAt: Date,
    isPublished: Boolean,
    thumbnailUrl: String,
    bannerUrl: String
    /* status: ['draft', 'published', 'hidden'] */
})

const Article = models.article || model('article', articleSchema);

export default Article;

