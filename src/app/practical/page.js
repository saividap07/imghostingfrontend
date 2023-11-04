import React from 'react';

const Page = () => {
    return (
        <div>

            

            <div className="container bootdey">
  <div className="col-md-12 bootstrap snippets">
    <div className="panel">
      <div className="panel-body">
        <textarea
          className="form-control"
          rows={2}
          placeholder="comment ....."
          defaultValue={""}
        />
        <div className="mar-top clearfix">
          <button className="btn btn-sm btn-primary pull-right" type="submit">
            <i className="fa fa-pencil fa-fw" /> Share
          </button>
          <a
            className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
            href="#"
          />
          <a
            className="btn btn-trans btn-icon fa fa-camera add-tooltip"
            href="#"
          />
          <a
            className="btn btn-trans btn-icon fa fa-file add-tooltip"
            href="#"
          />
        </div>
      </div>
    </div>
    <div className="panel">
      <div className="panel-body">
        {/* Newsfeed Content */}
        {/*===================================================*/}
        <div className="media-block">
          <a className="media-left mx-3" href="#">
            <img
              className="img-circle img-sm"
              alt="Profile Picture"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
            />
          </a>
          <div className="media-body">
            <div className="mar-btm">
              <a
                href="#"
                className="btn-link text-semibold media-heading box-inline"
              >
                Lisa D.
              </a>
              <p className="text-muted text-sm">
                <i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min ago
              </p>
            </div>
            <p>
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <div className="pad-ver">
              <div className="btn-group">
                <a
                  className="btn btn-sm btn-default btn-hover-success"
                  href="#"
                >
                  <i className="fa fa-thumbs-up" />
                </a>
                <a className="btn btn-sm btn-default btn-hover-danger" href="#">
                  <i className="fa fa-thumbs-down" />
                </a>
              </div>
              <a className="btn btn-sm btn-default btn-hover-primary" href="#">
                Comment
              </a>
            </div>
            <hr />
            {/* Comments */}
          
          </div>
        </div>
      
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Page;
