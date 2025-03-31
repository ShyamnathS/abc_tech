<%@ page import="javax.servlet.http.HttpSession" %>
<%
    HttpSession sessionObj = request.getSession(false);
    String user = (sessionObj != null) ? (String) sessionObj.getAttribute("username") : null;
    if (user == null) {
        response.sendRedirect("index.html");
    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome, <%= user %>!</h2>
    <a href="LogoutServlet">Logout</a>
</body>
</html>
