# ecl-dependency-research

The research goal of the ECL dependency project is to track data usage within an ECL program.  More specifically, the result of a usage analysis should make it possible to forward-trace input values (scalar or otherwise) and see if/how they affect any output; and it should be possible to back-trace output values (scalar or otherwise) to see their source(s).

## Abstact
 Large amounts of data are processed on a regular basis using HPCC systems, In this project an approach to understand and interpret the data flow within an ECL program is implemented. The current system renders an XML graph, which shows the operations at dataset level which can be viewed in the ECL Watch. As the data changes of individual fields within the dataset are not represented, In this project field level data and dependencies within datasets are tracked and their changes and operations are visualized as a directed graph for a generic ECL program to understand its data workflow.**The core of this project relies on parsing the ECL IR(Intermediate Representation) emitted by the ECL compiler**.The IR generated is transformed into graphical format. The system was tested against sample ECL programs available in ECL watch and other simpler programs available in the platform regression tests and it provided a simple easy to comprehend data flow visualization. 

See [project_notes.docx](project_notes.docx) for more information.

## Dependencies
- Linux machine with hpcc systems built from source, which also contains node.js ( https://github.com/hpcc-systems/HPCC-Platform/wiki/Building-HPCC)
- Cytoscape.js , which can be instsalled via npm ( http://js.cytoscape.org/ )

## Generation of the IR: 
This can be obtained by making use of the option flag - fgenerateIR, which can be invoked using eclcc command line argument. 
```bash
eclcc -fgenerateIR=1 -o=txt  file_name.ecl 
```

The Jira ticket describing the IR generation option contains additional information along with a simple example : https://track.hpccsystems.com/browse/HPCC-27133
 
## Build and run instuctions 
- Use the above command to generate the IR from an ECL source code and and pipeline the IR into an Input file named “ir.txt”. (or copy paste the IR from terminal into “ir.txt” file)
- Create an additional folder (“here named cytoscape”) to isolate the graph rendering files.
- Run the Parse.cpp file which generates temp.js. 
- Build the system using npm start (use npm install the first time)
- The graph is rendered on the default web browser on a local host port.
 
 
