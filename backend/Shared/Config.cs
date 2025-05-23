﻿using System.Text;

namespace backend.Shared
{
    public class Config
    {
        public static int MAX_TITLE_LENGTH = 255;
        public static int MAX_PHONE_LENGTH = 20;
        public static int MAX_INN_LENGTH = 12;
        public static int MAX_OGRN_LENGTH = 15;
        public static int MAX_DESCRIPTION_LENGTH = 3000;
        public static int SESSION_EXPIRES_HOURS = 730;
        public static string TOKEN_NAME = "access_token";
        public static string SECRET_KEY = "qVzWwz2G6HqZx3tWn4J0uNdJmNz8u2Y0pL3MwO5V3tw=";
        public static byte[] SECRET_KEY_BYTES = Encoding.UTF8.GetBytes(SECRET_KEY);
        public static string MEDIA_FOLDER_NAME = "uploads";
        public static string ROOT_FOLDER_NAME = "wwwroot";
    }
}
