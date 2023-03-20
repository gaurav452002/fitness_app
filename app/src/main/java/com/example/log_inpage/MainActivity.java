package com.example.log_inpage;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Patterns;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.button.MaterialButton;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView usernameTV = (TextView) findViewById(R.id.username);
        TextView passwordTV = (TextView) findViewById(R.id.password);

        MaterialButton loginbtn = (MaterialButton) findViewById(R.id.loginbtn);
        //admin and admin

        loginbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = usernameTV.getText().toString();
                String password = passwordTV.getText().toString();

                if (isValidUsername(username) && isValidPassword(password)) {
                    // Login successful
                    Intent intent = new Intent(MainActivity.this, exercise_list.class);
                    startActivity(intent);
                    finish();}

//                if (username.getText().toString().equals("admin") && password.getText().toString().equals("admin") &&password.getLen)
//                { //correct
//                    Toast.makeText(MainActivity.this, "LOGIN SUCCESSFUL", Toast.LENGTH_SHORT).show();}
                else
                {//incorrect
                Toast.makeText(MainActivity.this, "LOGIN FAILED !!!", Toast.LENGTH_SHORT).show();}
            }
        });

    }
    private boolean isValidUsername(String username) {
        return !TextUtils.isEmpty(username) && Patterns.EMAIL_ADDRESS.matcher(username).matches();
    }
    private boolean isValidPassword(String password) {
        return !TextUtils.isEmpty(password) && password.length() >=8;
    }
}