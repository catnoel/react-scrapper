import React from "react";

const Panel = () => (
  <div className="panel">
    <div className="panel panel-default">
      <div className="panel-container">
        <div className="content">
          <div className="panel-heading">
            <h4>
            Query
            </h4>
          </div>
      
          <form>
              <div className="form-group">
                  <h4><strong>Topic</strong></h4>
                  <input type="text" value className="form-control" id="search" required />
                  <h4><strong>Start Year</strong></h4> 
                  <input type="number" value className="form-control" id="start" required />
                  <h4><strong>End Year</strong></h4>
                  <input type="number" value className="form-control" id="end" required />
                </div>
              <div className="pull-right">
                  <button type="submit" className="btn btn-danger">Submit</button>
              </div>
          </form>
        
        </div>
      </div>
    </div>
    <div className="panel panel-primary">
    <div className="panel-container">
    <div className="content">
      <div className="panel-heading">
        <h4>
        Results
        </h4>
      </div>
          <div className="panel-body">

          </div>
    </div>
  </div>
    </div>
  </div>
);

export default Panel;
