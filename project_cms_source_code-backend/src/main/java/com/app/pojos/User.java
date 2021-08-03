package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;
import com.app.pojos.Role;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "users")
public class User extends BaseEntity {
	@Column(length = 20)
	@NotBlank(message = "name must be supplied")
	private String firstName;
	@Column(length = 20)
	@NotBlank(message = "name must be supplied")
	private String lastName;
	@Column(length = 20, unique = true)
	@NotBlank(message = "Email is required")
	@Length(min = 5, max = 50, message = "Invalid Email Length")
	@Email(message = "Invalid Email format")
	private String email;
	@Column
	private String phone;
	@Column(length = 20, nullable = false)
	@Pattern(regexp = "((?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid password!")
	private String password;
	@Enumerated(EnumType.STRING)
	private Role Role;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CourierDetails> courierList = new ArrayList<>();



	public List<CourierDetails> getCourierList() {
		return courierList;
	}

	public void setCourierList(List<CourierDetails> courierList) {
		this.courierList = courierList;
	}


	public User() {

	}

	public User(String firstName, String lastName, String email, String phone, String password, Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		Role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return Role;
	}

	public void setRole(Role role) {
		Role = role;
	}

	@Override
	public String toString() {
		return String.format("User [firstName=%s, lastName=%s, email=%s, phone=%s, password=%s, Role=%s]", firstName,
				lastName, email, phone, password, Role);
	}

}
