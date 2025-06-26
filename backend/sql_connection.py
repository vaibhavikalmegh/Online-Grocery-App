import os
import mysql.connector

def get_sql_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
        port=int(os.getenv("DB_PORT", 3306))
    )


if __name__ == '__main__':
    try:
        conn = get_sql_connection()
        print("✅ MySQL connection successful!")
    except Exception as e:
        print("❌ Connection failed:", e)