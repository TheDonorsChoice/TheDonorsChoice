package utilities;

import java.util.UUID;

public class UserUtils {
    public static String createGUID() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }
}
