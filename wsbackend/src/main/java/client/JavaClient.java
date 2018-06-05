//package client;
//
//import entity.SomeData;
//import org.springframework.web.client.HttpClientErrorException;
//import org.springframework.web.client.ResourceAccessException;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.concurrent.Callable;
//
//public class JavaClient {
//
//    public static final String URL = "http://localhost:8080/game";
//
//    private RestTemplate restTemplate = new RestTemplate();
//
//    private <T> T execute(Callable<T> callable) {
//        try {
//            return callable.call();
//        } catch (ResourceAccessException | HttpClientErrorException e) { // server down, resource exception
//            e.printStackTrace();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    public SomeData[] getAll() {
//        return execute(() -> restTemplate.getForObject(URL + "/games", SomeData[].class));
//    }
//
//    public SomeData getById(Integer id) {
//        return execute(() -> restTemplate.getForObject(String.format("%s", URL + "/" + id), SomeData.class));
//    }
//
//    public SomeData create(SomeData game) {
//        return execute(() -> restTemplate.postForObject(URL, game, SomeData.class));
//    }
//
//    public void update(SomeData game) {
//        execute(() -> {
//            restTemplate.put(String.format("%s/%s", URL, game.getId()), game);
//            return null;
//        });
//    }
//
//    public void delete(String id) {
//        execute(() -> {
//            restTemplate.delete(String.format("%s/%s", URL, id));
//            return null;
//        });
//    }
//}
