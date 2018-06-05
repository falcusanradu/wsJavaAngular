package controller;

import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import service.DefaultService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private DefaultService service;


    @RequestMapping(value = "/games", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable<User> games() {
        return this.service.getAll();
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public User login(@RequestBody User user) {
        return this.service.login(user.getUsername(), user.getPassword());
    }

}
