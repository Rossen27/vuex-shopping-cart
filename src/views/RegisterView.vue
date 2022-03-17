<template>
    <div class="about">
        <div class="container">
            <form class="row">
                <div class="col-md-6">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback"></div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback"></div>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword2" class="form-label">confirm password</label>
                    <input type="password" class="form-control" id="inputPassword2" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Gender</label>
                    <select id="inputState" class="form-select">
                        <option selected></option>
                        <option>Male</option>
                        <option>female</option>
                    </select>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">Check me out</label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn btn-outline-secondary">Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.about {
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
    height: 300px;
}
</style>