package com.example.backend.repo;
import com.example.backend.entities.Socket;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface SocketRepository extends JpaRepository<Socket, Long> {

}
