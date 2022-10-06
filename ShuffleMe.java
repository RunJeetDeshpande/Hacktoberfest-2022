import java.util.*;
import java.util.Collections;

class ShuffleMe {
    public static void main(String[] args) {

        
        List<Integer> numbers = new ArrayList<>();
      
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("List before shuffle: " + numbers);
        Collections.shuffle(numbers);
        System.out.println("List after shuffle: " + numbers);

    }
}