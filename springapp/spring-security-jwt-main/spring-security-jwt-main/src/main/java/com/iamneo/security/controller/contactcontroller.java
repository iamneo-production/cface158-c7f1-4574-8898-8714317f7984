package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.service.ContactService;






@RestController


public class contactcontroller {
@Autowired
private ContactService Enrollserve;
@GetMapping("/carroll")	
public List<Contact> getAllEnroll() {

return Enrollserve.getAll();
}
@GetMapping("/carroll/{id}")
public Contact getCarById(@PathVariable Long id) {
return Enrollserve.getCarById(id);
}
@PostMapping("/caraddroll")
public boolean createCar(@RequestBody Contact Enroll) {
return Enrollserve.createCar(Enroll);
}
@PutMapping("/carupdateroll/{id}")
public Contact updateEnroll( @RequestBody Contact Enroll,@PathVariable Long id) {
return Enrollserve.updateEnroll(id, Enroll);
}
@DeleteMapping("/cardeleteroll/{id}")
public String deleteEnroll(@PathVariable Long id) {
	Enrollserve.deleteEnroll(id);
	return "Details Deleted";
 
}
}
