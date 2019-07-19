import "./resty.css";

import React from "react";
// import superagent from 'superagent';
// import md5 from 'md5';
import Url from "../url/index";
import Label from "../label/index";
import Button from "../button/index";
import JsonText from "../jsonText/index";
import AuthButton from "../authorization/button";
import BasicInputUser from "../authorization/basic/basicInputUser";
import BasicInputPass from "../authorization/basic/basicInputPass";
import Bearer from "../authorization/bearer/index";
import JsonHeader from "../jsonview/header";
import JsonResponse from "../jsonview/response";
import { RestyContext } from "../../context/restyContext";

class RESTy extends React.Component {
  render() {
    return (
      <RestyContext.Consumer>
        {resty => {
          return (
            <main>
              <aside>
                <h2>History</h2>
                <ul id="history">
                  {resty.history &&
                    Object.keys(resty.history).map(key => (
                      <li
                        key={key}
                        id={key}
                        onClick={resty.resetFormFromHistory}
                      >
                        <span>
                          <strong>{resty.history[key].method}</strong>
                        </span>
                        <span>{resty.history[key].host}</span>
                        <span>{resty.history[key].path}</span>
                      </li>
                    ))}
                </ul>
              </aside>
              <section className="deck">
                <form onSubmit={resty.callAPI}>
                  <section>
                    <Url value={resty.url} onChange={resty.handleChange} />

                    <div id="methods">
                      <Label
                        checked={resty.method}
                        value="get"
                        onChange={resty.handleChange}
                      />
                      <Label
                        checked={resty.method}
                        value="post"
                        onChange={resty.handleChange}
                      />
                      <Label
                        checked={resty.method}
                        value="put"
                        onChange={resty.handleChange}
                      />
                      <Label
                        checked={resty.method}
                        value="patch"
                        onChange={resty.handleChange}
                      />
                      <Label
                        checked={resty.method}
                        value="delete"
                        onChange={resty.handleChange}
                      />
                      <Button />
                    </div>
                  </section>

                  <section className="deck col-2">
                    <div id="body">
                      <JsonText
                        onchange={resty.handleChange}
                        value={resty.requestBody}
                        disabled={
                          resty.method.match(/GET|get|DELETE|delete/)
                            ? true
                            : false
                        }
                      />
                    </div>

                    <div id="headers">
                      <AuthButton onClick={resty.toggleHeaders} />
                      <div className={"visible-" + resty.headersVisible}>
                        <h2>Basic Authorization</h2>
                        <BasicInputUser
                          onChange={resty.handleChange}
                          value={resty.username}
                        />
                        <BasicInputPass
                          onChange={resty.handleChange}
                          value={resty.password}
                        />
                      </div>

                      <div className={"visible-" + resty.headersVisible}>
                        <h2>Bearer Token</h2>
                        <Bearer
                          onChange={resty.handleChange}
                          value={resty.token}
                        />
                      </div>
                    </div>
                  </section>
                </form>
                <div id="json">
                  <JsonHeader src={resty.header} />
                  <JsonResponse src={resty.body} />
                </div>
              </section>
            </main>
          );
        }}
      </RestyContext.Consumer>
    );
  }
}

export default RESTy;
