package repository;

import entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Transactional
    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
