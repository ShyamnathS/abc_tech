import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.*;

import java.io.File;
import java.util.Scanner;

public class ReadUserXML {
    public static void main(String[] args) {
        try {
            // Load the XML file
            File file = new File("users.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(file);
            doc.getDocumentElement().normalize();

            // Get user input for ID
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter User ID: ");
            String inputId = scanner.nextLine();
            scanner.close();

            // Get all user nodes
            NodeList userList = doc.getElementsByTagName("user");
            boolean userFound = false;

            for (int i = 0; i < userList.getLength(); i++) {
                Node userNode = userList.item(i);

                if (userNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element userElement = (Element) userNode;

                    // Check if the user ID matches input
                    if (userElement.getAttribute("id").equals(inputId)) {
                        String name = userElement.getElementsByTagName("name").item(0).getTextContent();
                        String email = userElement.getElementsByTagName("email").item(0).getTextContent();
                        String age = userElement.getElementsByTagName("age").item(0).getTextContent();

                        // Display user details
                        System.out.println("\nUser Details:");
                        System.out.println("ID: " + inputId);
                        System.out.println("Name: " + name);
                        System.out.println("Email: " + email);
                        System.out.println("Age: " + age);
                        
                        userFound = true;
                        break;
                    }
                }
            }

            if (!userFound) {
                System.out.println("User ID not found in the database.");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
