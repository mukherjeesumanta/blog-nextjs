import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
    enTitle: String,
    enSlug: String,
    enMetaDesc: String,
    enContent: String,
    arTitle: String,
    arSlug: String,
    arMetaDesc: String,
    arContent: String,
    createdBy: String,
    createdAt: Date,
    lastUpdatedBy: String,
    lastUpdatedAt: String,
    /* isPublished: Boolean, */

    status: ['draft', 'published', 'hidden']
})

const Article = models.article || model('article', articleSchema);

export default Article;

