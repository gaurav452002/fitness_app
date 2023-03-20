package com.example.log_inpage;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ListView;

public class exercise_list extends Activity {

    ListView simpleList;
    String[] muscleList = {"Biceps", "Triceps", "Shoulders", "Back", "Chest", "Leg"};
  int[] flags = {R.drawable.bicep__gym__activity, R.drawable.tricep, R.drawable.shoulder, R.drawable.backexer, R.drawable.chest_exercise, R.drawable.legexer};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exercise_list);
        simpleList = (ListView) findViewById(R.id.simpleListView);
        CustomAdapter customAdapter = new CustomAdapter(getApplicationContext(), muscleList, flags);
        simpleList.setAdapter(customAdapter);

        
    }
}