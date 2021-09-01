package com.sip.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sip.entities.Article;
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}