import { useState, useEffect } from 'react';
import * as tfToxicity from '@tensorflow-models/toxicity';

const useModelLoader = () => {
  const [ modelInstance, setModelInstance ] = useState(null);
  const [ isModelLoading, setIsModelLoading ] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tfToxicity.load(0.9);
        setModelInstance(model);
      } catch (error) {
        console.error("Error loading model:", error);
      } finally {
        setIsModelLoading(false);
      }
    };

    loadModel();
  }, []);

  return { isModelLoading, modelInstance };
};

export default useModelLoader;