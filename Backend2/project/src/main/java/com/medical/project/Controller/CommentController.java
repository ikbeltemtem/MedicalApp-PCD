package com.medical.project.Controller;

import com.medical.project.Entity.Comment;
import com.medical.project.Entity.CommentDto;
import com.medical.project.Entity.Secretaire;
import com.medical.project.Entity.User;
import com.medical.project.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin({"*"})

public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/create")
    public ResponseEntity<Comment> createComment (@RequestBody CommentDto commentDto) {
        Comment comment = commentService.save(commentDto);

        return ResponseEntity.ok(comment);
    }

    @PutMapping("/update/{commentId}")
    public ResponseEntity<Comment> updateComment (@RequestBody CommentDto commentDto) {
        Comment comment = commentService.save(commentDto);

        return ResponseEntity.ok(comment);
    }

   @GetMapping("/get/{id}")
    public List<Comment> getCommentsByAssignment(@PathVariable("id") String assignmentId) {
       return  commentService.getCommentsByAssignmentId(assignmentId);


    }

    @DeleteMapping("{commentId}")
    public ResponseEntity<?> deleteComment (@PathVariable Long commentId) {
        try {
            commentService.delete(commentId);
            return ResponseEntity.ok("Comment deleted");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

}
