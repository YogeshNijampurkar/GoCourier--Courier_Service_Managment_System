package com.app.pojos;


import javax.persistence.*;

@MappedSuperclass
public class BaseEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	public BaseEntity() {
		
	}

	public BaseEntity(Integer id) {
		super();
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	

}
