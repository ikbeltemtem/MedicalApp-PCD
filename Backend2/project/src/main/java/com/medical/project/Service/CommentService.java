package com.medical.project.Service;

import com.medical.project.Dao.CommentRepository;
import com.medical.project.Dao.TherapieRepository;
import com.medical.project.Entity.Comment;
import com.medical.project.Entity.CommentDto;
import com.medical.project.Entity.Therapie;
import com.medical.project.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Set;

@Service
public class CommentService {
    ZonedDateTime now;
    private CommentRepository commentRepository;
    private TherapieRepository therapieRepository;
    @Autowired
    public CommentService(CommentRepository commentRepository,TherapieRepository therapieRepository){
        this.commentRepository=commentRepository;
        this.therapieRepository=therapieRepository;
    }

    public Comment save(CommentDto commentDto) {
        Comment comment = new Comment();
        String therapieId=commentDto.getTherapieId();


        comment.setId(commentDto.getId());
        comment.setTherapie(therapieId);
        comment.setText(commentDto.getText());
        comment.setEmail(commentDto.getUser());
        if (comment.getId() == null){
             now = ZonedDateTime.now();

           DateTimeFormatter formatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME;
           String formattedDateTime = formatter.format(now);

        comment.setCreatedDate(formattedDateTime);}
        else
            comment.setCreatedDate(commentDto.getCreatedDate());

        Comment savedComment = commentRepository.save(comment);


        return savedComment;
    }

   public List<Comment> getCommentsByAssignmentId(String assignmentId) {
        List<Comment> comments = commentRepository.findBytherapieId(assignmentId);

        return comments;
    }

    public void delete(Long commentId) {
        commentRepository.deleteById(commentId);

    }

}
