package com.iamneo.security.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Contact;
import com.iamneo.security.repository.ContactRepository;






@Service
public class ContactService {
@Autowired
private  ContactRepository Enrollrepo;

public List<Contact> getAll() {
return Enrollrepo.findAll();

}
public Contact getCarById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createCar(Contact Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Contact updateEnroll(Long id,Contact Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}