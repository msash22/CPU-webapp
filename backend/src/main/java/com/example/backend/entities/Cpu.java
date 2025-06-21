package com.example.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "cpu_modules")
public class Cpu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Model is required")
    private String model;
    @Column(nullable = false)
    @NotBlank(message = "Brand is required")
    private String brand;

    @Column(nullable = false)
    private float clockSpeed;
    @Column(nullable = false)
    private int cores;
    @Column(nullable = false)
    private int threads;

    @Column(nullable = false)
    private int tdp;
    @Column(name = "price_eur", nullable = false)
    private float price;
    @ManyToOne
    @JoinColumn(name = "socket_id", nullable = false)
    private Socket socket;


    public Long getId() {
        return id;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
    public void setSocket(Socket socket) {
        this.socket = socket;
    }
    public void setCores(int cores) {
        this.cores = cores;
    }

    public void setThreads(int threads) {
        this.threads = threads;
    }

    public void setClockSpeed(float clockSpeed) {
        this.clockSpeed = clockSpeed;
    }

    public void setTdp(int tdp) {
        this.tdp = tdp;
    }

    public void setPrice(float price) {
        this.price = price;
    }


    public String getModel() {
        return model;
    }
    public String getBrand() {
        return brand;
    }
    public Socket getSocket() {
        return socket;
    }
    public int getCores() {
        return cores;
    }
    public int getThreads() {
        return threads;
    }
    public float getClockSpeed() {
        return clockSpeed;
    }
    public int getTdp() {
        return tdp;
    }
    public float getPrice() {
        return price;
    }
}
