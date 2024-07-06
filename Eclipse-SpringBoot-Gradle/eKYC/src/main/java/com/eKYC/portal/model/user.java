package com.eKYC.portal.model;

import java.io.Serializable;


import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "user")

public class user implements Serializable{
	
	public user() {}
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false, name = "id")
	private Long id;
	
	@Column(nullable = false, updatable = false, name = "ekycCode")
	private String ekycCode;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "ctype")
	private String ctype;
	
	@Column(name = "fname")
	private String fname;
	
	@Column(name = "mname")
	private String mname;
	
	@Column(name = "lname")
	private String lname;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "prefix")
	private String prefix;
	
	@Column(name = "rfname")
	private String rfname;
	
	@Column(name = "rmname")
	private String rmname;
	
	@Column(name = "rlname")
	private String rlname;
	
	@Column(name = "relationship")
	private String relationship;
	
	@Column(name = "rprefix")
	private String rprefix;
	
	@Column(name = "dob")
	private String dob;
	
	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "addl1")
	private String addl1;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "district")
	private String district;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "country")
	private String country;
	
	@Column(name = "pincode")
	private Integer pincode;
	
	@Column(name = "caddl1")
	private String caddl1;
	
	@Column(name = "ccity")
	private String ccity;
	
	@Column(name = "cdistrict")
	private String cdistrict;
	
	@Column(name = "cstate")
	private String cstate;
	
	@Column(name = "ccountry")
	private String ccountry;
	
	@Column(name = "cpincode")
	private Integer cpincode;
	
	
	
	
	public user(Long id, String username, String password, String email, String ctype, String fname, String mname,
			String lname, String gender, String prefix, String rfname, String rmname, String rlname,
			String relationship, String rprefix, String dob, String mobile, String addl1, String city, String district,
			String state, String country, Integer pincode, String caddl1, String ccity, String cdistrict, String cstate,
			String ccountry, Integer cpincode, String ekycCode) {
		super();
		this.id = id;
		this.ekycCode = ekycCode;
		this.username = username;
		this.password = password;
		this.email = email;
		this.ctype = ctype;
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.gender = gender;
		this.prefix = prefix;
		this.rfname = rfname;
		this.rmname = rmname;
		this.rlname = rlname;
		this.relationship = relationship;
		this.rprefix = rprefix;
		this.dob = dob;
		this.mobile = mobile;
		this.addl1 = addl1;
		this.city = city;
		this.district = district;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
		this.caddl1 = caddl1;
		this.ccity = ccity;
		this.cdistrict = cdistrict;
		this.cstate = cstate;
		this.ccountry = ccountry;
		this.cpincode = cpincode;
	}




	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getEkycCode() {
		return ekycCode;
	}


	public void setEkycCode(String ekycCode) {
		this.ekycCode = ekycCode;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCtype() {
		return ctype;
	}

	public void setCtype(String ctype) {
		this.ctype = ctype;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getRfname() {
		return rfname;
	}

	public void setRfname(String rfname) {
		this.rfname = rfname;
	}

	public String getRmname() {
		return rmname;
	}

	public void setRmname(String rmname) {
		this.rmname = rmname;
	}

	public String getRlname() {
		return rlname;
	}

	public void setRlname(String rlname) {
		this.rlname = rlname;
	}

	public String getRelationship() {
		return relationship;
	}

	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}

	public String getRprefix() {
		return rprefix;
	}

	public void setRprefix(String rprefix) {
		this.rprefix = rprefix;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAddl1() {
		return addl1;
	}

	public void setAddl1(String addl1) {
		this.addl1 = addl1;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public String getCaddl1() {
		return caddl1;
	}

	public void setCaddl1(String caddl1) {
		this.caddl1 = caddl1;
	}

	public String getCcity() {
		return ccity;
	}

	public void setCcity(String ccity) {
		this.ccity = ccity;
	}

	public String getCdistrict() {
		return cdistrict;
	}

	public void setCdistrict(String cdistrict) {
		this.cdistrict = cdistrict;
	}

	public String getCstate() {
		return cstate;
	}

	public void setCstate(String cstate) {
		this.cstate = cstate;
	}

	public String getCcountry() {
		return ccountry;
	}

	public void setCcountry(String ccountry) {
		this.ccountry = ccountry;
	}

	public Integer getCpincode() {
		return cpincode;
	}

	public void setCpincode(Integer cpincode) {
		this.cpincode = cpincode;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	@Override
	public String toString() {
		return "user [id=" + id + ", ekycCode=" + ekycCode + ", username=" + username + ", password=" + password
				+ ", email=" + email + ", ctype=" + ctype + ", fname=" + fname + ", mname=" + mname + ", lname=" + lname
				+ ", gender=" + gender + ", prefix=" + prefix + ", rfname=" + rfname + ", rmname=" + rmname
				+ ", rlname=" + rlname + ", relationship=" + relationship + ", rprefix=" + rprefix + ", dob=" + dob
				+ ", mobile=" + mobile + ", addl1=" + addl1 + ", city=" + city + ", district=" + district + ", state="
				+ state + ", country=" + country + ", pincode=" + pincode + ", caddl1=" + caddl1 + ", ccity=" + ccity
				+ ", cdistrict=" + cdistrict + ", cstate=" + cstate + ", ccountry=" + ccountry + ", cpincode="
				+ cpincode + "]";
	}


	
}

