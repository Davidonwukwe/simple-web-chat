import styled from "styled-components";

export const Container = styled.div`
  #chatSection {
    background-color: #eee; 
    height: 100%;
  }
  #chat1 .form-outline .form-control~.form-notch div {
    pointer-events: none;
    border: 1px solid #eee;
    box-sizing: border-box;
    background: transparent;
  }

  #chat1 .form-outline .form-control~.form-notch .form-notch-leading {
    left: 0;
    top: 0;
    height: 100%;
    border-right: none;
    border-radius: .65rem 0 0 .65rem;
  }

  #chat1 .form-outline .form-control~.form-notch .form-notch-middle {
    flex: 0 0 auto;
    max-width: calc(100% - 1rem);
    height: 100%;
    border-right: none;
    border-left: none;
  }

  #chat1 .form-outline .form-control~.form-notch .form-notch-trailing {
    flex-grow: 1;
    height: 100%;
    border-left: none;
    border-radius: 0 .65rem .65rem 0;
  }

  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-leading {
    border-top: 0.125rem solid #39c0ed;
    border-bottom: 0.125rem solid #39c0ed;
    border-left: 0.125rem solid #39c0ed;
  }

  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-leading,
  #chat1 .form-outline .form-control.active~.form-notch .form-notch-leading {
    border-right: none;
    transition: all 0.2s linear;
  }

  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-middle {
    border-bottom: 0.125rem solid;
    border-color: #39c0ed;
  }

  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-middle,
  #chat1 .form-outline .form-control.active~.form-notch .form-notch-middle {
    border-top: none;
    border-right: none;
    border-left: none;
    transition: all 0.2s linear;
  }

  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-trailing {
    border-top: 0.125rem solid #39c0ed;
    border-bottom: 0.125rem solid #39c0ed;
    border-right: 0.125rem solid #39c0ed;
  }

  #chat1 .form-outline .form-control:focus~.form-notch .form-notch-trailing,
  #chat1 .form-outline .form-control.active~.form-notch .form-notch-trailing {
    border-left: none;
    transition: all 0.2s linear;
  }

  #chat1 .form-outline .form-control:focus~.form-label {
    color: #39c0ed;
  }

  #chat1 .form-outline .form-control~.form-label {
    color: #bfbfbf;
  }
  
  .chat-body {
    height: 75vh;
    overflow-y: auto;
    
  }
  #textArea, .chat-body {
    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 1px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      -webkit-border-radius: 1px;
      border-radius: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: grey;
      outline: 1px solid slategrey;
    }
  }
  .light-blue-bg {
    background-color: #39c0ed;
    color: white;
  }
  .load-more {
    color: #39c0ed;
    text-decoration: none;
    cursor: pointer;
  }
  .message-time {
    font-size: 8px;
  }
  

`
