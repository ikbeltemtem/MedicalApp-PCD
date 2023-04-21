package com.medical.project.Dao;

import com.medical.project.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("select c from Comment c "
            + " where c.therapie= :therapieId")
    List<Comment> findBytherapieId(String therapieId);
}
