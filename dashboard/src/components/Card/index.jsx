import PropTypes from 'prop-types';

function Card({ title, borderColor, total, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${borderColor} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{total}</div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes ={
    title: PropTypes.string.isRequired, 
    borderColor: PropTypes.string.isRequired, 
    total: PropTypes.number.isRequired, 
    icon: PropTypes.string.isRequired
}

export default Card;
