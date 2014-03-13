package utilities;

import com.lambdaworks.crypto.SCryptUtil;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.ImmutablePair;
import play.Logger;
import java.util.UUID;

public class UserUtils {
    private static int CPU_COST = 65536;
    private static int MEMORY_COST = 16;
    private static int PARALLELIZATION = 1;

    private static Logger.ALogger log = play.Logger.of(UserUtils.class);

    public static String createGUID() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }

    /**
     * This method will take a raw password (i.e. how the user entered it) or
     * a password that has already been hashed in the browser.  It will then salt
     * and hash the password and return a (salt, hashedPass) pair.
     *
     * This version is intended to be used for initial password creation
     */
    public static String hashPassword(String givenPassword) {
        if (StringUtils.isEmpty(givenPassword)) {
            throw new UnsupportedOperationException("Can't hash an empty password, or use an empty salt");
        }
        return SCryptUtil.scrypt(givenPassword, CPU_COST, MEMORY_COST, PARALLELIZATION);
    }

    public static boolean check(String input, String hashed) {

        return SCryptUtil.check(input, hashed);
    }
}
