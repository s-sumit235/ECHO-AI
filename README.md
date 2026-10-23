# ECHO-AI
### Explainable Classification for Healthcare Observation

ECHO-AI is a deep-learning project designed to identify and classify possible abnormalities in medical images, with a focus on chest X-rays. It combines transfer learning with visual explanations so users can review both the model's predictions and the image regions that influenced them.

The project uses a DenseNet121-based multi-label classification approach and Grad-CAM heatmaps to make model outputs easier to inspect. A Streamlit application is planned as the interactive interface for demonstrating the workflow.

> **Important:** ECHO-AI is an educational and research prototype. It is not a medical device, does not provide a diagnosis, and must not be used as a substitute for assessment by a qualified healthcare professional.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Key Features](#key-features)
- [Target Abnormalities](#target-abnormalities)
- [How It Works](#how-it-works)
- [Technology Stack](#technology-stack)
- [Dataset](#dataset)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Training Workflow](#training-workflow)
- [Model Evaluation](#model-evaluation)
- [Explainability with Grad-CAM](#explainability-with-grad-cam)
- [Running the Application](#running-the-application)
- [Responsible Use and Limitations](#responsible-use-and-limitations)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview

Medical imaging plays an important role in identifying a range of health conditions. Reviewing large numbers of images can require considerable time and specialist expertise. Machine-learning methods can help researchers investigate patterns in these images, but predictions are more useful to review when the system also provides insight into the visual evidence behind them.

ECHO-AI explores this approach through an image-classification pipeline that:

1. Preprocesses and examines an anonymized medical-image dataset.
2. Uses transfer learning with DenseNet121 to predict one or more possible abnormalities.
3. Produces probability scores for the target labels.
4. Evaluates model performance using standard classification metrics.
5. Generates Grad-CAM heatmaps to highlight image regions that influenced a prediction.
6. Presents the workflow through a Streamlit web interface.

The task is treated as **multi-label classification** because a single chest X-ray may be associated with more than one finding.

## Objectives

- Prepare and analyze an anonymized medical-image dataset.
- Examine class distribution and identify potential class imbalance.
- Apply suitable image preprocessing and data augmentation.
- Develop a transfer-learning model based on DenseNet121.
- Predict multiple abnormality labels for a single image.
- Assess performance with precision, recall, F1-score, and ROC-AUC where appropriate.
- Use Grad-CAM to visualize image regions associated with model predictions.
- Build an interactive interface for demonstrating image analysis and explanations.

## Key Features

- **Multi-label prediction:** supports predictions for multiple target findings in one image.
- **Transfer learning:** uses DenseNet121 as the proposed image-classification backbone.
- **Probability scores:** displays model scores for individual target labels.
- **Visual explanations:** uses Grad-CAM heatmaps to show regions influencing a prediction.
- **Performance evaluation:** includes metrics such as precision, recall, F1-score, and ROC-AUC.
- **Interactive demonstration:** uses Streamlit as the planned user interface.
- **Data exploration:** includes analysis of dataset composition and class imbalance.

*These are the intended project capabilities. Availability and performance depend on the implementation, trained weights, dataset, and evaluation results in the repository.*

## Target Abnormalities

The proposed chest X-ray task includes the following findings:

| Label | Description |
|---|---|
| Pneumonia | A lung condition that can cause inflammatory changes visible on imaging |
| Cardiomegaly | Enlargement of the cardiac silhouette |
| Pleural Effusion | Fluid accumulation in the pleural space |
| Edema | In this context, pulmonary edema |
| Pneumothorax | Air in the pleural space |
| Atelectasis | Partial or complete collapse of lung tissue |
| Consolidation | An area of lung tissue that appears filled with material rather than air |

These labels describe the proposed classification targets. Their definitions, label mapping, and ground-truth quality should be verified against the selected dataset before training.

## How It Works

The planned pipeline is:

```text
Anonymized Medical Images
          |
          v
Data Cleaning and Exploration
          |
          v
Image Preprocessing and Augmentation
          |
          v
Train / Validation / Test Split
          |
          v
DenseNet121 Transfer Learning
          |
          v
Multi-Label Predictions and Scores
          |
          +----------------------+
          |                      |
          v                      v
Model Evaluation          Grad-CAM Heatmaps
          |                      |
          +----------+-----------+
                     |
                     v
             Streamlit Interface
```

### 1. Data preparation

The dataset is inspected for missing or uncertain labels, duplicate images, corrupted files, and class imbalance. Images are prepared in the format required by the selected model.

### 2. Image preprocessing

Images are resized and normalized to match the model's input requirements. Data augmentation may be applied to the training set to improve robustness. Augmentation should preserve clinically meaningful image characteristics.

### 3. Model training

DenseNet121 is used as the proposed transfer-learning architecture. A classification head is configured for the target labels, and the model is trained for a multi-label task. The training configuration, loss function, optimizer, thresholds, and checkpoint-selection method should be documented with the implementation.

### 4. Prediction

For an input image, the trained model produces a score for each target label. These scores are model outputs, not confirmed diagnoses. A label is selected only according to the thresholding strategy defined by the project.

### 5. Evaluation and explanation

Performance is measured on held-out data. Grad-CAM is then used to generate a heatmap that highlights image regions associated with a selected model output.

### 6. Application

The planned Streamlit interface provides a way to upload an image and inspect the model's output and explanation. The application should communicate the prototype's limitations clearly.

## Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Programming language | Python | Core implementation |
| Deep learning | PyTorch | Model development and training |
| Model architecture | DenseNet121 | Transfer-learning backbone |
| Data analysis | Pandas, NumPy | Data inspection and manipulation |
| Image processing | torchvision, PIL | Image loading and preprocessing |
| Evaluation | scikit-learn | Classification metrics |
| Visualization | Matplotlib | Charts and result visualization |
| Explainable AI | Grad-CAM | Prediction-related heatmaps |
| Web interface | Streamlit | Interactive demonstration |
| Development environment | Google Colab / Jupyter | Experimentation and development |

## Dataset

The project proposal identifies **NIH ChestX-ray14** as the primary candidate dataset. CheXpert and MIMIC-CXR are listed as alternatives. The proposal also mentions ISIC for a possible skin-lesion imaging direction; this would require a different set of target labels and a separately designed workflow.

Before using a dataset:

- Review its official terms of use, access requirements, and citation instructions.
- Confirm the meaning and encoding of each label.
- Check for missing, uncertain, or inconsistent annotations.
- Split data in a way that avoids leakage between training and evaluation sets; where patient identifiers are available and permitted, use patient-level separation.
- Document the dataset version, filtering decisions, and preprocessing steps.
- Do not upload private or identifiable patient information to the repository.

Dataset sources:

- [NIH ChestX-ray14](https://nihcc.app.box.com/v/ChestXray-Nih)
- [CheXpert](https://stanfordmlgroup.github.io/competitions/chexpert/)
- [MIMIC-CXR](https://physionet.org/content/mimic-cxr/)
- [ISIC Archive](https://www.isic-archive.com/)

Dataset availability and licensing conditions may change. Consult the official source before downloading or redistributing data.

## Project Structure

A suggested repository layout is shown below. Adjust it to match the files actually present in your project.

```text
ECHO-AI/
├── app/
│   └── streamlit_app.py       # Streamlit interface
├── data/
│   ├── README.md              # Dataset instructions; no private images
│   └── .gitkeep
├── notebooks/
│   └── exploration.ipynb      # Data exploration and experiments
├── src/
│   ├── data_preprocessing.py  # Loading and preprocessing
│   ├── model.py               # DenseNet121 model definition
│   ├── train.py               # Training pipeline
│   ├── evaluate.py            # Evaluation metrics
│   └── gradcam.py             # Grad-CAM generation
├── tests/
│   └── test_preprocessing.py  # Example tests
├── models/
│   └── README.md              # Instructions for obtaining checkpoints
├── requirements.txt
├── .gitignore
├── LICENSE
└── README.md
```

This is a recommended structure, not a claim that every file has already been implemented.

## Getting Started

### Prerequisites

- Python 3.10 or another version supported by the project's installed dependencies.
- Git.
- Access to the selected dataset, subject to its terms.
- A trained model checkpoint for inference, once training is complete.

A compatible GPU can make training faster, but availability depends on the environment. Google Colab may be used for experimentation.

### 1. Clone the repository

Replace the placeholder URL with the actual GitHub repository URL.

```bash
git clone https://github.com/<your-username>/ECHO-AI.git
cd ECHO-AI
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Activate it:

**Windows (PowerShell)**

```powershell
.venv\Scripts\Activate.ps1
```

**macOS / Linux**

```bash
source .venv/bin/activate
```

### 3. Install dependencies

If `requirements.txt` is available:

```bash
pip install -r requirements.txt
```

Otherwise, install the dependencies selected for the implementation. For example:

```bash
pip install torch torchvision pandas numpy scikit-learn matplotlib pillow streamlit
```

Install a PyTorch build compatible with your operating system and hardware by following the [official PyTorch installation guide](https://pytorch.org/get-started/locally/). Install any additional Grad-CAM dependency used by the implementation.

### 4. Prepare the dataset

Download the dataset from its official source and follow its access conditions. Keep the image files and any sensitive metadata out of Git unless redistribution is explicitly permitted.

Update the paths and label mapping in the project configuration or scripts to match the local dataset layout.

### 5. Train or obtain a model checkpoint

Run the training script only after it has been implemented and configured for the selected dataset. For example, if the repository uses `src/train.py`:

```bash
python -m src.train
```

This command is illustrative; available arguments and output paths depend on the actual implementation. The application will need a compatible trained checkpoint to make predictions.

## Training Workflow

A reproducible training process should document the following:

1. **Dataset split:** create training, validation, and test partitions before fitting the model.
2. **Preprocessing:** use consistent image dimensions and normalization; fit any data-dependent transformations using training data only.
3. **Augmentation:** apply augmentation to training data only.
4. **Model setup:** initialize DenseNet121 and configure the output layer for the selected labels.
5. **Optimization:** record the loss function, optimizer, learning rate, batch size, number of epochs, and random seed.
6. **Validation:** monitor validation metrics and use a documented checkpoint-selection rule.
7. **Testing:** evaluate the selected model once on the held-out test set.
8. **Checkpointing:** save the model weights and configuration needed to reproduce inference.

Because the task is multi-label, the training setup must support independent label outputs rather than forcing each image into exactly one mutually exclusive class. The exact loss function and threshold-selection procedure should be stated in the code and experiment notes.

## Model Evaluation

ECHO-AI proposes the following metrics:

| Metric | What it measures |
|---|---|
| Precision | How often positive predictions are correct |
| Recall | How many of the actual positive examples are detected |
| F1-score | The harmonic mean of precision and recall |
| ROC-AUC | How well scores separate positive and negative examples across thresholds |

For multi-label classification, report results per label as well as an appropriate aggregate, such as macro or micro averages. State the averaging method, evaluation split, and decision thresholds. Because class imbalance can affect results, include per-label support and consider precision-recall analysis alongside ROC-AUC.

**No performance numbers are included here.** Add metrics only after evaluating the trained model on held-out data. Do not describe expected results as measured results.

## Explainability with Grad-CAM

Grad-CAM (Gradient-weighted Class Activation Mapping) produces a heatmap using gradients associated with a chosen model output. When overlaid on an input image, it can help a reviewer inspect which regions contributed to that output.

In ECHO-AI, the planned workflow is to:

1. Select a predicted label for an image.
2. Generate a Grad-CAM heatmap for that label.
3. Overlay the heatmap on the original image.
4. Display the visualization alongside the model's score.

Grad-CAM is an aid to model inspection, not proof that a prediction is correct or that the highlighted region represents a clinically valid finding. Heatmaps can be misleading and should be interpreted cautiously.

## Running the Application

Once the Streamlit application and a compatible model checkpoint are available, launch it with the path used by your repository. For the suggested structure:

```bash
streamlit run app/streamlit_app.py
```

The application is intended to let a user select a supported image, review the model's output scores, and inspect Grad-CAM visualizations. Exact controls and supported input formats depend on the implemented interface.

If the application fails to start, check that:

- Dependencies are installed in the active environment.
- The dataset or checkpoint path is configured correctly.
- The checkpoint architecture and label order match the inference code.
- The image format and dimensions are supported.
- The installed PyTorch and torchvision versions are compatible.

## Responsible Use and Limitations

ECHO-AI is a research and educational prototype. It has not been established as safe or effective for clinical decision-making.

- **Not for diagnosis:** outputs must not be used to diagnose, rule out, or treat a condition.
- **Dataset limitations:** model performance may reflect the population, equipment, labels, and collection process of the training dataset.
- **Class imbalance:** uncommon findings may be harder to detect and can be obscured by aggregate metrics.
- **Generalization:** performance on one dataset does not establish performance at another hospital or on other patient populations.
- **Label uncertainty:** medical-image labels may contain uncertainty or errors.
- **Explainability limitations:** Grad-CAM visualizations do not establish causation or clinical validity.
- **Privacy:** use appropriately anonymized data and follow all applicable access, security, and data-handling requirements.
- **Human oversight:** any real-world medical interpretation must remain with qualified healthcare professionals.

## Future Improvements

Potential next steps include:

- Complete and validate the end-to-end training and inference pipeline.
- Add configuration files for dataset paths, hyperparameters, and label mappings.
- Record experiment settings and metrics for reproducibility.
- Add per-label precision-recall curves and confusion-matrix-style summaries where appropriate.
- Improve calibration and document how classification thresholds are selected.
- Add automated tests for preprocessing, model output shapes, and Grad-CAM generation.
- Improve application error handling and input validation.
- Document model limitations and dataset provenance alongside any published checkpoint.
- Assess generalization on an appropriate independent dataset before making broader claims.

## Contributing

Contributions that improve reproducibility, documentation, testing, or model evaluation are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Make focused changes and add tests where practical.
4. Verify that the documented commands match the implementation.
5. Open a pull request describing the change and its impact.

Please do not include private patient data, credentials, or datasets that cannot legally be redistributed.

## License

Add a `LICENSE` file before distributing the project and update this section to name the chosen license. Also verify the terms governing any third-party datasets, pretrained weights, and dependencies. Until a license is selected, the repository's reuse and redistribution terms may be unclear.

## Acknowledgements

This project draws on the proposed NIH ChestX-ray14 dataset, PyTorch's deep-learning ecosystem, DenseNet121 transfer learning, Grad-CAM for visual explanation, and Streamlit for the planned demonstration interface. Please cite the original dataset and relevant methods in project reports and publications.
