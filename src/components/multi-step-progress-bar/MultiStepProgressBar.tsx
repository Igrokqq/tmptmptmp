import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

import styles from "./MultiStepProgressBar.module.css";

interface MultiStepProgressBarProps {
    page: string;
    onPageNumberClick: (pageNumber: string) => void;
}

const MultiStepProgressBar: React.FC<MultiStepProgressBarProps> = ({ page, onPageNumberClick }) => {
    let stepPercentage = 0;

    if (page === "pageone") {
        stepPercentage = 16;
    } else if (page === "pagetwo") {
        stepPercentage = 49.5;
    } else if (page === "pagethree") {
        stepPercentage = 82.5;
    } else if (page === "pagefour") {
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }

    // @ts-ignore
    return (
        <ProgressBar percent={stepPercentage}>
            <Step>
                {({ accomplished, index }) => (
                    <>
                        <div
                            className={`${styles.indexedStep} ${accomplished ? styles.accomplished : null}`}
                            onClick={() => onPageNumberClick("1")}
                        >
                            {index + 1}
                        </div>
                    </>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`${styles.indexedStep} ${accomplished ? styles.accomplished : null}`}
                        onClick={() => onPageNumberClick("2")}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`${styles.indexedStep} ${accomplished ? styles.accomplished : null}`}
                        onClick={() => onPageNumberClick("3")}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`${styles.indexedStep} ${accomplished ? styles.accomplished : null}`}
                        onClick={() => onPageNumberClick("4")}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
};

export default MultiStepProgressBar;
