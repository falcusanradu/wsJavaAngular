package service;

import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.UserRepository;

import java.util.List;

@Service
public class DefaultService implements IDefaultService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User login(String username, String password) {
        return this.userRepository.findByUsernameAndPassword(username, password);
    }

    public Iterable<User> getAll() {
        return this.userRepository.findAll();
    }

}
