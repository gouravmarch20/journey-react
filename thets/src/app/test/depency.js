import { useState, useEffect } from "react";

const useTask = (dependencies, job) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentDependencyCount, setCurrentDependencyCount] = useState(
    dependencies ? dependencies.length : 0
  );

  useEffect(() => {
    if (dependencies && dependencies.length > 0) {
      dependencies.forEach((dependency) => {
        if (dependency.isCompleted) {
          setCurrentDependencyCount((count) => count - 1);
        } else {
          dependency.subscribe(() => {
            setCurrentDependencyCount((count) => count - 1);
          });
        }
      });
    } else {
      executeJob();
    }
  }, []);

  useEffect(() => {
    if (currentDependencyCount === 0) {
      executeJob();
    }
  }, [currentDependencyCount]);

  const executeJob = () => {
    job(() => {
      setIsCompleted(true);
    });
  };

  const subscribe = (callback) => {
    if (isCompleted) callback();
  };

  return { isCompleted, subscribe };
};

const TaskComponent = () => {
  const processA = useTask([], (done) => {
    setTimeout(() => {
      console.log("Process A");
      done();
    }, 100);
  });

  const processB = useTask([processA], (done) => {
    setTimeout(() => {
      console.log("Process B");
      done();
    }, 1500);
  });

  const processC = useTask([], (done) => {
    setTimeout(() => {
      console.log("Process C");
      done();
    }, 1000);
  });

  const processD = useTask([processA, processB], (done) => {
    setTimeout(() => {
      console.log("Process D");
      done();
    }, 1000);
  });

  const processE = useTask([processC, processD], (done) => {
    setTimeout(() => {
      console.log("Process E");
      done();
    }, 100);
  });

  useTask([processA, processB, processC, processD, processE], () => {
    console.log("All is done!");
  });

  return <div>Check console for task execution.</div>;
};

export default TaskComponent;
