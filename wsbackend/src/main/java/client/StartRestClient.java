//package client;
//
//import entity.SomeData;
//import org.hibernate.service.spi.ServiceException;
//import org.springframework.web.client.RestClientException;
//import org.springframework.web.client.RestTemplate;
//
//public class StartRestClient {
//
//    private final static JavaClient client = new JavaClient();
//
//    public static void main(String[] args) {
//        RestTemplate restTemplate = new RestTemplate();
//
//        SomeData game = new SomeData();
//        game.setId(1333);
//        game.setTeam1("team1");
//        game.setTeam2("team2");
//        game.setTickets(10);
//        game.setTitle("title");
//        game.setPriceOfTicket(100);
//        try {
//
//            SomeData game1 = client.getById(32);
//            System.out.println("GET BY ID --------------------------");
//            System.out.println(game1.getTitle());
//            System.out.println("--------------------------");
//            show(() -> System.out.println(client.create(game)));
//            show(() -> {
//                SomeData[] res = client.getAll();
//                for (SomeData g : res) {
//                    System.out.println(g.getId() + ": " + g.getTitle());
//                }
//            });
//        } catch (RestClientException ex) {
//            System.out.println("Exception ... " + ex.getMessage());
//        }
//
//    }
//
//
//    private static void show(Runnable task) {
//        try {
//            task.run();
//        } catch (ServiceException e) {
//            //  LOG.error("Service exception", e);
//            System.out.println("Service exception" + e);
//        }
//    }
//}
