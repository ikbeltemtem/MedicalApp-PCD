package com.medical.project.Entity;

import java.time.ZonedDateTime;

public class CommentDto {
    private Long id;
    private String therapieId;
    private String text;
    private String user;
    private String createdDate;

    public String getTherapieId() {
        return therapieId;
    }

    public void setTherapieId(String assignmentId) {
        this.therapieId = assignmentId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public String toString() {
        return "CommentDto [id=" + id + ", assignmentId=" + therapieId + ", text=" + text + ", user=" + user
                + ", createdDate=" + createdDate + "]";
    }
}
