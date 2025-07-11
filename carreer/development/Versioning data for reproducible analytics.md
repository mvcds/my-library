When it comes to large-scale [[data]] analysis or [[Machine Learning|machine intelligence]] problems, being able to reproduce different versions of analysis done on different data sets and parameters is immensely valuable.

To achieve reproducible analysis, both the data and the model (including [[algorithm]] choice, [[parameters]] and [[hyperparameter]]s) need to be [[Version Control System|version controlled]]. Versioning data for reproducible analytic is a relatively trickier problem than versioning models because of the data size.

Tools such as [[DVC]] help in versioning data by allowing users to commit and push data files to a remote [[Cloud Computing Service|Cloud]] storage bucket using a [[git]]-like workflow. This makes it easy for collaborators to pull a specific version of data to reproduce an analysis.
