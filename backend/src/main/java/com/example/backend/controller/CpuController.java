package com.example.backend.controller;

import com.example.backend.entities.Cpu;
import com.example.backend.entities.Socket;
import com.example.backend.repo.CpuRepository;
import com.example.backend.repo.SocketRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CpuController {
    private final CpuRepository cpuRepository;
    private final SocketRepository socketRepository;

    public CpuController(CpuRepository cpuRepository, SocketRepository socketRepository) {
        this.cpuRepository = cpuRepository;
        this.socketRepository = socketRepository;
    }

    @GetMapping("/cpus")
    public List<Cpu> getAllCpus() {
        return cpuRepository.findAll();
    }

    @GetMapping("/sockets")
    public List<Socket> getAllSockets() {
        return socketRepository.findAll();
    }

    @GetMapping("/cpus/{id}")
    public Cpu getCpuById(@PathVariable Long id) {
        return cpuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("CPU with ID " + id + " not found"));
    }

    @PostMapping("/cpus")
    public Cpu createCpu(@RequestBody Cpu createdCpu){
        return cpuRepository.save(createdCpu);
    }

    @PostMapping("/sockets")
    public Socket createSocket(@Valid @RequestBody Socket createdSocket){
        return socketRepository.save(createdSocket);
    }

    @PutMapping("/cpus/{id}")
    public Cpu updateCpu(@PathVariable Long id, @RequestBody Cpu updatedCpu) {
        Cpu existingCpu = cpuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("CPU with ID " + id + " not found"));

        Socket socket = socketRepository.findById(updatedCpu.getSocket().getId())
                .orElseThrow(() -> new RuntimeException("Socket not found"));


        existingCpu.setModel(updatedCpu.getModel());
        existingCpu.setBrand(updatedCpu.getBrand());
        existingCpu.setClockSpeed(updatedCpu.getClockSpeed());
        existingCpu.setCores(updatedCpu.getCores());
        existingCpu.setThreads(updatedCpu.getThreads());
        existingCpu.setTdp(updatedCpu.getTdp());
        existingCpu.setPrice(updatedCpu.getPrice());
        existingCpu.setSocket(socket);

        return cpuRepository.save(existingCpu);
    }

}
