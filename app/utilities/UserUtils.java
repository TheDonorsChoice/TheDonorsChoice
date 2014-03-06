package utilities;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.tuple.ImmutablePair;
import play.Logger;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

public class UserUtils {
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
    public static ImmutablePair<String, String> hashPassword(String givenPassword) {
        return hashPassword(createGUID(), givenPassword);
    }

    public static ImmutablePair<String, String> hashPassword(String salt, String givenPassword) {
        if (StringUtils.isEmpty(givenPassword) || StringUtils.isEmpty(salt)) {
            throw new UnsupportedOperationException("Can't hash an empty password, or use an empty salt");
        }

        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-512");
        } catch (NoSuchAlgorithmException algoEx) {
            log.error("Failed to generate a sha-512 digest");
        }

        if (digest != null) {
            String saltedPass = salt + givenPassword;
            digest.update(saltedPass.getBytes());
            byte[] hashedBytes = digest.digest();
            return ImmutablePair.of(salt, new String(Hex.encodeHex(hashedBytes)));
        } else {
            throw new UnsupportedOperationException("Null message digest");
        }
    }
}
