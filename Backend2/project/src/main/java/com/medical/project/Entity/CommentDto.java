package com.medical.project.Entity;

import java.time.ZonedDateTime;

public class CommentDto {
    private Long id;
    private String therapie;
    private String text;
    private String email;
    private String createdDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTherapie() {
        return therapie;
    }

    public void setTherapie(String therapie) {
        this.therapie = therapie;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public String toString() {
        return "CommentDto [id=" + id + ", assignmentId=" + therapie + ", text=" + text + ", user=" + email
                + ", createdDate=" + createdDate + "]";
    }
}
