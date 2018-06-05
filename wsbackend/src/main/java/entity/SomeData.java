package entity;


import javax.persistence.*;
import java.io.Serializable;

@Table(name = "data")
@Entity
public class SomeData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "data_id")
    private Integer id;
    @Column(name = "data_value")
    private String value;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}