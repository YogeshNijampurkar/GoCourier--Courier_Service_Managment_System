package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import com.app.pojos.Role;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "courierboy")
public class CourierBoy extends BaseEntity
{@Column(length = 20)
@NotBlank(message = "name must be supplied")
	private String firstName;
	private String lastName;
	@Column(length = 20, unique = true)
	@NotBlank(message = "Email is required")
	@Length(min = 5, max = 50, message = "Invalid Email Length")
	@Email(message = "Invalid Email format")
	private String email;
	private String phone;
	@Column(length = 20, nullable = false)
	@Pattern(regexp = "((?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid password!")
	private String password;
	private String city;
	@Enumerated(EnumType.STRING)
	private Role Role;
	@OneToMany(mappedBy="courierBoyId",cascade=CascadeType.ALL,orphanRemoval=true)
	private List<Request> requestList=new ArrayList<>();
	public CourierBoy() {
		
	}
	
	public CourierBoy( String firstName, String lastName,
		String email,
			String phone,
			String password,
			String city, Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.city = city;
		Role = role;
	}

	
	
	public List<Request> getRequestList() {
		return requestList;
	}

	public void setRequestList(List<Request> requestList) {
		this.requestList = requestList;
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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	
	public Role getRole() {
		return Role;
	}

	public void setRole(Role role) {
		Role = role;
	}

	@Override
	public String toString() {
		return String.format(
				"CourierBoy [Id=%d,firstName=%s, lastName=%s, email=%s, phone=%s, password=%s, city=%s, Role=%s]",getId(), firstName,
				lastName, email, phone, password, city, Role);
	}


	
	

}
