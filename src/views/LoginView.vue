<template>
    <div class="Login">
        <div class="container">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div
                        id="emailHelp"
                        class="form-text"
                    >We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and
                        numbers, and must not contain spaces, special characters, or emoji1.
                    </div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="d-flex bd-highlight mb-3">
                    <button
                        type="submit"
                        class="btn btn-outline-secondary me-auto p-2 bd-highlight"
                    >Log In</button>
                    <button type="button" class="btn btn-outline-warning p-2 bd-highlight">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.Login {
    flex-direction: flex;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    width: 500px;
    height: 500px;
}
.test {
    width: 100%;
    height: 30px;
}
</style>