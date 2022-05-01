import AnimateGridStyle from './AnimateGrid.module.scss';

export const AnimateGrid = () => (
  <div className={AnimateGridStyle.overlay}>
    <div className={AnimateGridStyle.gridWrapper}>
      <div className={`${AnimateGridStyle.grid} ${AnimateGridStyle.gridIbf}`}>
        <div className={AnimateGridStyle.gridFade} />
      </div>
      <div className={AnimateGridStyle.grid}>
        <div className={AnimateGridStyle.gridLines} />
      </div>
    </div>
  </div>
);
