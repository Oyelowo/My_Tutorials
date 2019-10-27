package app;

/**
 * GeoStudent
 */
public class GeoStudent  {
    private double grade;

    GeoStudent(double grade) {
        this.grade = grade;
    }

    GeoStudent read(){
        System.out.println("read");
        return this;
    }


    GeoStudent dance(){
        System.out.println("Dance");
        return this;
    }
    


public static void main(String[] args) {
    GeoStudent sonja = new GeoStudent(7);
    GeoStudent dancer = sonja.dance();
 
}
    
}