class BlogSystem {
    constructor() {
        this.users = new Map();
        this.posts = new Map();
        this.comments = new Map();
        this.userId = 1;
        this.postId = 1;
        this.commentId = 1;
    }
    createUser(name) {
        const user = { id: this.userId++, name };
        this.users.set(user.id, user);
        return user;
    }
    deleteUser(userId) {
        for (let post of this.posts.values()) {
            if (post.userId === userId) {
                this.deletePost(post.id);
            }
        }
        for (let comment of this.comments.values()) {
            if (comment.userId === userId) {
                this.comments.delete(comment.id);
            }
        }
        this.users.delete(userId);
    }
    createPost(userId, title, content) {
        if (!this.users.has(userId)) throw new Error("User not found");

        const post = {
            id: this.postId++,
            userId,
            title,
            content
        };
        this.posts.set(post.id, post);
        return post;
    }
    deletePost(postId) {
        for (let comment of this.comments.values()) {
            if (comment.postId === postId) {
                this.comments.delete(comment.id);
            }
        }
        this.posts.delete(postId);
    }
    getPostsByUser(userId) {
        return [...this.posts.values()].filter(p => p.userId === userId);
    }
    createComment(userId, postId, text) {
        if (!this.users.has(userId)) throw new Error("User not found");
        if (!this.posts.has(postId)) throw new Error("Post not found");

        const comment = {
            id: this.commentId++,
            userId,
            postId,
            text
        };
        this.comments.set(comment.id, comment);
        return comment;
    }
    getCommentsByPost(postId) {
        return [...this.comments.values()].filter(c => c.postId === postId);
    }
}
