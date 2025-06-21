package com.example.backend.repo;
import com.example.backend.entities.Cpu;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface CpuRepository extends JpaRepository<Cpu, Long> {
}
