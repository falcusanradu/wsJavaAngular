package repository;

import entity.SomeData;
import org.springframework.data.repository.CrudRepository;

public interface DataRepository extends CrudRepository<SomeData, Integer> {
//    @Transactional
//    @Query(value = "SELECT * FROM game_table g WHERE g.id_game= :id", nativeQuery = true)
//    SomeData findAllById(@Param("id") Integer id);
}
