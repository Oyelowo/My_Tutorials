package app;

/**
 * Student
 */
public interface Student {
    default void dance(){
        System.out.println("Dance yeah");
    }

    static void sing() {
        System.out.println("sing");
    }
    default void read(String book){}; 
}

