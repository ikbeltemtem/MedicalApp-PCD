package com.medical.project.Dao;

import com.medical.project.Entity.Comment;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@DataJpaTest
class CommentRepositoryTest {

    @Autowired
    private CommentRepository underTest;
    @Test
    void OKfindBytherapieId() {

        Comment comment=new Comment(
           "Chiropractie","user@gmail.com","01/05/2023","gooood!!!"
        );
       underTest.save(comment);
        //when
        List<Comment> exists=underTest.findBytherapieId("Chiropractie");
        Comment ctest=exists.get(0);
        String text=ctest.getText();
        //then
        assertEquals("gooood!!!",text);
    }
}